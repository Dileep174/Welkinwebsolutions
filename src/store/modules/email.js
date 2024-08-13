// email.js (Vuex module)
import emailjs from 'emailjs-com';

const state = {
  serviceId: 'service_qi3e9u2',
  templateId: 'template_f5crmml',
  userId: 'vEt6aiadSlmkkaNe0'
};

const mutations = {
  updateServiceId(state, serviceId) {
    state.serviceId = serviceId;
  },
  updateTemplateId(state, templateId) {
    state.templateId = templateId;
  },
  updateUserId(state, userId) {
    state.userId = userId;
  }
};

const actions = {
  sendEmail({ state }, formData) {
    emailjs.send(state.serviceId, state.templateId, formData, state.userId)
      .then(response => {
        console.log('Email sent successfully!', response);
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};