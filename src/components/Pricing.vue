<template>
  <div id="pg-pricing" :key="pricingKey">
      <h3>PRICING</h3>
      <h4>
        We have 3 membership tiers:
      </h4>
      <b-table striped hover :items="priceList"></b-table>
      <br>
      <h4>
        Enjoy the benefits below:
      </h4>
       <b-table striped hover :items="benefits"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  props: [],
  components: {
  },
  data () {
    return {
      pricingKey: 0,
      priceList: [
        {
          Category: 'Tier 1/Basic',
          'Monthly Fee (IDR)': '200K'
        },
        {
          Category: 'Tier 2/Business',
          'Monthly Fee (IDR)': '500K'
        },
        {
          Category: 'Tier 3/Entrepreneur',
          'Monthly Fee (IDR)': '1M'
        }
      ],
      benefits: [
        {
          Feature: 'Stock Opname',
          'Tier 1': 'Yes',
          'Tier 2': 'Yes',
          'Tier 3': 'Yes'
        },
        {
          Feature: 'Record Profit',
          'Tier 1': 'Yes',
          'Tier 2': 'Yes',
          'Tier 3': 'Yes'
        },
        {
          Feature: 'Analyze Sales With CHART',
          'Tier 1': 'No',
          'Tier 2': 'Yes',
          'Tier 3': 'Yes'
        },
        {
          Feature: '24/7 Support',
          'Tier 1': 'No',
          'Tier 2': 'Yes',
          'Tier 3': 'Yes'
        },
        {
          Feature: 'Export Data to Excel',
          'Tier 1': 'No',
          'Tier 2': 'No',
          'Tier 3': 'Yes'
        },
        {
          Feature: 'Income-predicting AI',
          'Tier 1': 'No',
          'Tier 2': 'No',
          'Tier 3': 'Yes'
        }
      ]
    }
  },
  methods: {},
  created () {}
}
</script>

<style>

</style>
