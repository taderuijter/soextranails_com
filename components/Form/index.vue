<template>
<div class="form" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10">
        
        <div v-if="succes" class="row mb-5">
          <div class="col-12">
            <div class="message message__succes">
              <div class="row g-0 align-items-center">
                <div class="col-12 col-md-2 text-center text-md-start">
                  <img src="~assets/img/bell.svg" width="70px" height="70px" alt="" title="">
                </div>
                <div class="col-12 col-md-10">
                  {{ blok.succes }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="error" class="row mb-5">
          <div class="col-12">
            <div class="message message__error">
              <div class="row g-0 align-items-center">
                <div class="col-12 col-md-2 text-center text-md-start">
                  <img src="~assets/img/bell.svg" width="70px" height="70px" alt="" title="">
                </div>
                <div class="col-12 col-md-10">
                  {{ blok.error }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <form v-else ref="form" @submit.prevent="sendEmail">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form__field">
                <label for="name">{{ blok.name_label }}</label>
                <input required v-model="name" name="name" id="name" type="text"/>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form__field">
                <label for="email">{{ blok.name_label }}</label>
                <input required v-model="email" name="email" id="email" type="email"/>
              </div>
            </div>
            <div class="col-12">
              <div class="form__field">
                <label for="subject">{{ blok.subject_label }}</label>
                <input v-model="subject" name="subject" id="subject" type="text"/>
              </div>
            </div>
            <div class="col-12">
              <div class="form__field">
                <label for="subject">{{ blok.message_label }}</label>
                <textarea v-model="message" name="message" id="message" rows="6"/>
              </div>
            </div>
            <div class="col-12">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
        
        <div class="row mt-5 mb-5">
          <div class="col-12 col-lg-6">
            <p><strong>So Extra Nails</strong></p> 
            <p><strong>Email:</strong><br>info@soextranails.com</p>
            <p><strong>{{ blok.kvk }}:</strong><br>84794119</p>
          </div>
          <div class="col-12 col-lg-6">
            <p><strong>Opening hours</strong></p>
            <div class="row g-0">
              <div class="col-6">{{blok.monday}}</div><div class="col-6">{{blok.monday_time}}</div>
              <div class="col-6">{{blok.tuesday}}</div><div class="col-6">{{blok.tuesday_time}}</div>
              <div class="col-6">{{blok.wednesday}}</div><div class="col-6">{{blok.wednesday_time}}</div>
              <div class="col-6">{{blok.thursday}}</div><div class="col-6">{{blok.thursday_time}}</div>
              <div class="col-6">{{blok.friday}}</div><div class="col-6">{{blok.friday_time}}</div>
              <div class="col-6">{{blok.saturday}}</div><div class="col-6">{{blok.saturday_time}}</div>
              <div class="col-6">{{blok.sunday}}</div><div class="col-6">{{blok.sunday_time}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {

  data(){
    return {
      succes: false,
      error: false,
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  },

  props: {
    blok: {
      type: Object,
      required: true
    }
  },

  methods: {
    sendEmail() {
      emailjs.sendForm('service_9pxp8pm', 'template_2kdct5c', this.$refs.form, 'wT67q1HFy4U9YSNJl')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.succes = true
        }, (error) => {
            console.log('FAILED...', error.text);
            this.error = true
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.form {

  &__field {
    position: relative;
    width: 100%;
    margin: 10px 0;

    label {
      position: absolute;
      color: #8F8F8F;
      background-color: $white;
      padding: 0 5px;
      font-size: 12px;
      top: -8px;
      left: 30px;
    }

    input {
      font-size: 14px;
      width: 100%;
      padding: 20px 30px;
      border: 1px solid #8F8F8F;
      @include border-radius(100px);

      &:focus {
        border-color: $black;
        outline: none;
      }
    }

    textarea {
      font-size: 14px;
      width: 100%;
      padding: 30px;
      border: 1px solid #8F8F8F;
      @include border-radius(25px);

      &:focus {
        border-color: $black;
        outline: none;
      }
    }
  }

  button {
    width: 100%;
    border: none;
    padding: 20px 0;
    text-align: center;
    color: $white;
    font-weight: 700;
    background-color: $black;
    @include border-radius(100px);
    @include distortion;
  }
}

.message {
  font-size: 14px;
  padding: 30px;
  @include border-radius(20px);

  @include md-screen {
    font-size: 16px;
  }

  p:last-child {
    margin: 0;
  }

  img {
    height: 45px;
    width: 45px;

    @include md-screen {
      height: 70px;
      width: 70px;
    }
  }

  &__succes {
    background-color: #CEF5D9;
    color:#0D7C2D;

    a {
      color: #0D7C2D;

      &:hover {
        color: #0D7C2D;
        text-decoration: none;
      }
    }

    img {
      filter: invert(32%) sepia(57%) saturate(698%) hue-rotate(85deg) brightness(101%) contrast(94%);
    }
  }

  &__error {
    background-color: #DF5B5B;
    color:#811919;

    a {
      color: #811919;

      &:hover {
        color: #811919;
        text-decoration: none;
      }
    }

    img {
      filter: invert(10%) sepia(74%) saturate(3734%) hue-rotate(352deg) brightness(99%) contrast(88%);
    }
  }
}
</style>