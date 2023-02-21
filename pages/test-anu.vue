<script lang="ts" setup>
const isDrawerShown = ref(false)
const creditCardDetails = reactive({
  cardHolderName: '',
  creditCardNum: undefined,
  expiration: '',
  cvc: undefined,
})
</script>

<template>
  <div class="container m-4">
    <ABtn @click="isDrawerShown = true">
      Show drawer
    </ABtn>

    <ADrawer
      v-model="isDrawerShown"
      title="Drawer title"
      subtitle="Chocolate cake tiramisu donut"
    >
      <ACard title="Payment Details">
        <div class="grid-row place-items-stretch sm:grid-cols-2 a-card-body">
          <AInput
            v-model.trim="creditCardDetails.cardHolderName"
            label="Card Holder"
            placeholder="John Doe"
            class="sm:col-span-2"
          />
          <AInput
            v-model.number="creditCardDetails.creditCardNum"
            label="Card Number"
            placeholder="4444 3333 2222 1111"
            class="sm:col-span-2"
            type="number"
          />
          <AInput
            v-model.trim="creditCardDetails.expiration"
            label="Expiration"
            placeholder="23/12"
          />
          <AInput
            v-model.trim.number="creditCardDetails.cvc"
            label="CVV"
            placeholder="987"
            type="number"
          />

          <!-- Action button -->
          <ABtn class="justify-self-start">
            Submit
          </ABtn>
        </div>
      </ACard>
    </ADrawer>
  </div>
</template>
