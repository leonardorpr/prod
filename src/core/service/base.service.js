import firebase from '../config';

class BaseService {

  // METHODS
  getAll = async (ref) => {
    let response;
    let success;
    let value;
    let result;

    try {
      response = await firebase.database().ref(ref).on('value', snapshot => {
        success = true;
        value = snapshot.val();
        result = !!response ? Object.keys(response).map(uid => ({ ...response[uid], uid })) : [];
      });
    } catch (e) {
      // DO NOTHING
    }

    const data = result;
    const errors = null;

    return this.serviceResponse({ data, success, errors });
  }

  getById = async (ref) => {
    let response;
    let success;
    let value;

    try {
      response = await firebase.database().ref(ref).on('value', snapshot => {
        success = true;
        value = snapshot.val();
      });
    } catch (e) {
      // DO NOTHING
    }

    const data = value;
    const errors = null;

    return this.serviceResponse({ data, success, errors });
  }

  post = async (ref, obj) => await firebase.database().ref(ref).push(obj);

  update = async (ref, obj) => await firebase.database().ref(ref).update(obj);

  destroy = async (ref, obj) => await firebase.database().ref(ref).remove(obj);

  // MANAGE RESPONSES
  serviceResponse = (response) => {
    if (response.success) {
      return this.success({ data: response.data });
    } else {
      return this.error({
        data: null,
        content: null,
        errors: null
      });
    }
  }

  // TYPES OF RESPONSES
  success = ({ data }) => {
    return {
      data,
      success: true,
    }
  }

  error = ({ data, content, errors }) => {
    return {
      errors,
      error: content,
      data: data,
      success: false,
    }
  }
}

export default BaseService;
