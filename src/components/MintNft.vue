<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="1">
        <h3>1.</h3>
      </v-col>
      <v-col cols="3">
        <v-btn :disabled="isLogin" @click="connectWallet" color="success">
          Connect Wallet
        </v-btn>
      </v-col>
      <v-col cols="3">
        <h5>{{ walletAddress }}</h5>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="1">
        <h3>2.</h3>
      </v-col>
      <v-col cols="3">
        <v-btn :disabled="cannotMint" @click="mintNft" color="success">
          Mint
        </v-btn>
      </v-col>
      <v-col cols="3">
        <h5>{{ resultMessage }}</h5>
        <a href="https://rinkeby.etherscan.io/address/0x55D48E856DB1933A2F63d30eb0055b8840B1B165"
        target="_blank">rinkeby</a>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-alert v-if="errorMessage" type="error">
          {{ errorMessage }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import * as connectContract from '../contract/connectContract'

export default {
  name: 'MintNft',

  data: () => ({
    walletAddress: "",
    isLogin: false,
    cannotMint: true,
    errorMessage: "",
    resultMessage: ""
  }),

  methods: {
    connectWallet: async function () {
      try {
        this.walletAddress = await connectContract.connectWallet(2)
        this.isLogin = true
        this.cannotMint = false;
      } catch (error) {
        console.log(error)
        this.errorMessage = String(error)
      }
    },
    mintNft: async function () {
      try {
        connectContract.mintNFT(this.walletAddress)
        this.resultMessage = "Check the result on ehterscan."
      } catch (error) {
        console.log(error)
        this.errorMessage = String(error)
      }
    }
  }
}
</script>

