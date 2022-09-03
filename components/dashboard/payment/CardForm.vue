<template>
  <div class="form">
    <div class="form__title">
      <div class="form__title__add">
        <div class="icon-container">
          <ion-icon class="icon-container__icon" name="checkmark-sharp" />
        </div>
        Add new card
      </div>
    </div>
    <div class="form__input-container d-flex justify-content-between">
      <div class="form__input-container__content">
        <span class="heading">Card number</span>
        <span class="text">Enter the 16-digit card number on the card</span>
      </div>
      <ion-icon
        name="card-sharp"
        style="align-self: center; font-size: 2em"
      /><input
        v-model="cardNumber"
        maxlength="16"
        class="form__input-container__input"
      >
    </div>
    <div class="form__input-container d-flex justify-content-between">
      <div class="form__input-container__content">
        <span class="heading">Card owner</span>
        <span class="text">Enter the name on the card</span>
      </div>
      <input v-model="cardOwner" class="form__input-container__input">
    </div>
    <div
      style="gap: 8px"
      class="form__input-container d-flex justify-content-between"
    >
      <div class="form__input-container__content">
        <span class="heading">Expiry date</span>
        <span class="text">Enter the expiration date of the card</span>
      </div>
      <input v-model="expireMonth" class="form__input-container__input-sm">
      <span style="align-self: center">/</span>
      <input v-model="expireYear" class="form__input-container__input-sm">
      <span style="align-self: center">CVV2</span>
      <input v-model="cvc" class="form__input-container__input-sm">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardForm',
  data () {
    return {
      cardNumber: '',
      cardOwner: '',
      expireMonth: '',
      expireYear: '',
      cvc: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 24px 32px;
  background: rgba(27, 182, 110, 0.1);
  border: 1px solid #cfcfcf;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  font-family: 'Rubik';
  font-style: normal;
  //
  max-width: 700px;
  min-height: 292px;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //
    padding: 0px;
    width: 90%;

    &__add {
      display: flex;
      align-items: center;

      .icon-container {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #1bb66e;
        text-align: center;
        margin-right: 10px;

        &__icon {
          font-size: 16px;
          color: white;
          margin-top: 4px;
        }
      }
    }
  }

  &__input-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 90%;

    &__content {
      display: flex;
      flex-direction: column;

      .heading {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
      }
      .text {
        color: #5e5e5e;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
    }
    &__input {
      background-color: white;
      border-radius: 8px;
      padding: 12px 16px;
    }
  }
}

.form__input-container__input-sm {
  background-color: white;
  border-radius: 8px;
  padding: 12px 16px;
  width: 56px;
}
</style>
