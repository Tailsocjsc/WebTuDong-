const urlSever = 'https://referral.viecoi.vn/api/json';

import axios from 'axios';
function* LoginUser(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'is_login',
      version: 2,
      params: {
        type: '1',
        email: input.email,
        password: input.password,
        os: '14',
        registration_ids: input.registrationIds,
        facebook_id: input.FacebookId,
        google_id: input.GoogleId,
        lang_id: input.lang_id,
      },
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return temp;
}
//========================================================
function* Messenger(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_messages',
      version: 1,
      params: {messages_id: '', lang_id: input.langCode},
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* ForgotPassword(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'forgot_password',
      version: 1,
      params: {type: 2, email: input.Email, lang_id: input.langCode},
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* ChangePassword(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'change_password',
      version: 1,
      params: {
        user_id: input.User,
        password_old: input.Passwordold,
        password_new: input.Passwordnew,
        lang_id: input.langCode,
      },
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* UpdateInfo(input) {
  console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'edit_info_jobseeker',
      version: 1,
      params: {
        user_id: input.userId,
        email: input.email,
        name: input.name,
        birthday: input.birthday,
        gender: input.gender,
        marital_status: '1',
        address: input.address,
        city: input.city,
        phone: input.phone,
        skype: input.skype,
        lang_id: input.lang_id,
      },
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* Notification(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_list_notice',
      version: 1,
      params: {
        user_id: input.userId,
        lang_id: input.lang_id,
        size_page: '200',
        current_page: '1',
      },
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* GetInfo(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_info_jobseeker',
      version: 1,
      params: {user_id: input.userId, lang_id: input.langCode},
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* GetCandidate(input) {
  console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_list_cadidate',
      version: 1,
      params: {
        user_id: input.user_id,
        application_type: input.application_type,
        size_page: '100',
        current_page: '1',
        lang_id: input.lang_id,
      },
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* SearchJob(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'search_job',
      version: 1,
      params: {
        keyword: '',
        level_group_id: '',
        funcrole_group_id: '',
        functional_role_id: '',
        location_id: '',
        type_exp: '',
        salary_type_id: '',
        keyword_id: '',
        skill_id: '',
        benefit_id: '',
        profile_id: '',
        precedent_id: '',
        time_id: '',
        user_id: input.user_id,
        size_page: '100',
        current_page: '1',
        lang_id: input.lang_id,
      },
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* GetDetailJob(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_detail_job',
      version: 1,
      params: {job_id: input.job_id, lang_id: input.lang_id},
    })
    .then(function (response) {
      temp = response.data;
      // console.log(response);
    })
    .catch(function (error) {
      // console.log('Loi', error);
    });

  return temp;
}
//========================================================
function* CheckEmail(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'check_email_exits',
      params: {email: input.email, lang_id: input.lang_id},
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {});

  return temp;
}
//========================================================
function* Register(input) {
  // console.log('input', input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'create_jobseekers',
      version: 2,
      params: {
        email: input.email,
        password: input.password,
        name: input.name,
        address: '',
        country: '',
        city_id: '',
        phone: '',
        functional_role_id: '',
        birthday: input.birthday,
        gender: '',
        facebook_id: '',
        google_id: '',
        os_register: 1,
        lang_id: input.lang_id,
      },
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {});

  return temp;
}

export const API = {
  LoginUser,
  Messenger,
  ForgotPassword,
  ChangePassword,
  UpdateInfo,
  Notification,
  GetInfo,
  GetCandidate,
  SearchJob,
  GetDetailJob,
  CheckEmail,
  Register,
};
