<template>
  <div>
    <Navbar />
    <Header title="Booking Policy" />
    <Intro>
      <p>Before you book it’s important that you inform yourself with So Extra Nails’ booking policy. By booking an appointment you agree to the booking policy as stated below.</p>
    </Intro>
    <Content>
      <h2>Cancellation and no-show policy</h2>
      <p>It can always happen that our nail date unfortunately cannot go on.</p>
      <p>However, So Extra Nails <span>enables you</span> to make cancellations <span>up to 48 hours</span> and changes <span>up to 24 hours</span> before your planned booking free of charge via WhatsApp or the booking link (<a href="https://so-extra-nails.salonized.com/widget_bookings/new">click here</a>).</p>
      <p><span>Please take note:</span></p>
    </Content>
    <Footer />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Nuxt Starter Kit'
      }
    },
    head() {
      return {
        title: 'So Extra Nails - Booking Policy',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'This is the Nuxt Starter Kit from Nomad Ventures'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>