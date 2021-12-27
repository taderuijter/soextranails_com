<template>
  <div>
    <Navbar />
    <Header title="Booking Policy" />
    <Intro>
      <p>Before you book it’s important that you inform yourself with So Extra Nails’ booking policy. By booking an appointment you agree to the booking policy as stated below.</p>
    </Intro>
    <Content position="text-start">
      <h2>Cancellation and no-show policy</h2>
      <p>It can always happen that our nail date unfortunately cannot go on.</p>
      <p>However, So Extra Nails <span>enables you</span> to make cancellations <span>up to 48 hours</span> and changes <span>up to 24 hours</span> before your planned booking free of charge via WhatsApp or the booking link (<a href="https://so-extra-nails.salonized.com/widget_bookings/new">click here</a>).</p>
      <p><span>Please take note:</span></p>
      <ul>
        <li>Cancellations made in less than 48 hours and changes made in less than 24 hours prior to your scheduled appointment means that a 50% fee on your total booking will be charged. Even if you are sick.</li>
        <li>Not showing up at all without notice? Then a no-show fee of 100% of your total booking will be charged.</li>
        <li>It can happen once you forget your appointment. However, this policy applies at all times. If it happens more than once, unfortunately we have to conclude we are not a match and you can no longer book at So Extra Nails.</li>
      </ul>
      <h2>Deposits</h2>
      <p>To confirm your nail date you need to pay a <span>deposit of 50%</span> in advance on your total booking.</p>
      <p><span>Please take note:</span></p>
      <ul>
        <li>If you cancel your appointment within 48 hours (or earlier) before your planned booking, your full deposit will be refunded.</li>
        <li>Unfortunately, no refunds will be made in the event of late cancellations, changes or a no-show.</li>
      </ul>
      <h2>covid-19</h2>
      <p>Staying healthy is our priority. Measurements are made to keep let your naildate happen <span>as safe as possible.</span></p>
      <p><span>Please take note:</span></p>
      <ul>
        <li>Reschedule (with bearing the policy in mind) your appointment if you’re experiencing a cold or similar symptoms.</li>
        <li>Wear a facemask from the moment of entry and during your treatment</li>
        <li>You can always be assured of a cleaned, desinfected & vented studio after each visit</li>
      </ul>
      <h2>Warranty</h2>
      <p>All treatments are performed with <span>great care, hygiene and attention</span>. Yet it remains manual work and So Extra Nails has a warranty period of 72 hours.</p>
      <p><span>Please take note:</span></p>
      <ul>
        <li>The warranty covers repairing or restoring a broken or chipped nail free of charge.</li>
        <li>
          But only if the nail(s) is damaged by normal use and within 72 hours after your appointment. Normal use is understood to mean:<br>
          1. Not using your nails as tools (opening cans, scraping stickers, opening key rings, etc.)<br />
          2. Taking care of your manicure as So Extra Nails advises<br />
          3. Protecting your manicure from damage caused by external factors by e.g. wearing gloves e.g
        </li>
        <li>After a fix has been carried out on the basis of the stipulated warranty, no further claims can be made under the warranty and normal costs apply.</li>
      </ul>
      <h2>Booking & visits</h2>
      <p>Make sure you have booked the <span>correct treatment(s)</span>. If you are not sure what to book, please inform So Extra Nails.</p>
      <p><span>Please take note:</span></p>
      <ul>
        <li>Make sure to always book product removal in combination with your treatment if you’re a returning Natural Nail or Aprés Gel X customer, OR if you already have(gel) product on your nails.</li>
        <li>Book as accurate as possible otherwise there might be a chance So Extra Nails can’t perform all desired treatments. But don't book too much unnecessary time either as it takes up a spot for a potential customer.</li>
        <li>Show up on time! Not too late, but also not more than 5 minutes too early. Every minute late will be taken from your total treatment time.</li>
        <li>If you have not arrived after 15 minutes, your appointment will be canceled and the no-show policy applies.</li>
      </ul>
      <h2>Last but certainly not least...</h2>
      <p><span>Please take note:</span></p>
      <ul>
        <li>Severly damaged or infected nails will not be treated!</li>
        <li>Solar nails will not be removed by So Extra Nails. Inform your current nail technician if your not sure what products have been used.</li>
      </ul>
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
        title: 'So Extra Nails 💅 Booking Policy • Read before you book!',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'By booking, you agree to the booking policy. You are enabled to make cancellations up to 48h and changes up to 24h prior to your booking free of charge.'
          }
        ],
        link: [
          { rel: 'canonical', href: 'https://www.soextranails.com/booking-policy/' },
          { rel: 'alternate', hreflang: 'en', href: 'https://www.soextranails.com/booking-policy/' },
          { rel: 'alternate', hreflang: 'nl', href: 'https://www.soextranails.nl/afspraak-beleid/' },
          { rel: 'alternate', hreflang: 'x-default', href: 'https://www.soextranails.nl/afspraak-beleid/' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>