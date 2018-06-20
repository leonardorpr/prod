import firebase from '../config';

class BaseService {

  // METHODS
  getAll = async (ref) => {
    try {
      const response = await firebase.database().ref(ref).on('value', snapshot => {
        const value = snapshot.val();
        const data = !!value ? Object.keys(value).map(uid => ({ ...value[uid], uid })) : [];
        const success = true;

        return this.serviceResponse({ data, success });
      });
    } catch (e) {
      // DO NOTHING
    }
  }

  getById = async (ref) => {
    try {
      const response = await firebase.database().ref(ref).on('value', snapshot => {
        const success = true;
        const value = snapshot.val();

        return this.serviceResponse({ data, success });
      });
    } catch (e) {
      // DO NOTHING
    }
  }

  post = async (ref, obj) => await firebase.database().ref(ref).push(obj);

  update = async (ref, obj) => await firebase.database().ref(ref).update(obj);

  destroy = async (ref, obj) => await firebase.database().ref(ref).remove(obj);

  // MANAGE RESPONSES
  serviceResponse = (response) => {
    if (response.success) {
      return { data: 'oi', success: true };
    } else {
      return { data: null, success: false };
    }
  }

  // TYPES OF RESPONSES
  success = ({ data }) => {
    return {
      data,
      success: true,
    }
  }

  error = ({ data, content }) => {
    return {
      data: null,
      success: false,
    }
  }
}

export default BaseService;
