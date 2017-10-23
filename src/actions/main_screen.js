import { MAIN } from '../consts';

export default {
  pending: category => ({ type: MAIN.PHOTOS_PENDING, category }),
  success: data => ({ type: MAIN.PHOTOS_SUCCESS, data }),
  error: error => ({ type: MAIN.PHOTOS_ERROR, error }),
  setFeedback: data => ({ type: MAIN.SET_FEEDBACK_INFO, data }),
  sendFeedback: data => ({ type: MAIN.SEND_FEEDBACK, data }),
  sendFeedbackSuccess: () => ({ type: MAIN.SEND_FEEDBACK_SUCCESS }),
  sendFeedbackError: error => ({ type: MAIN.SEND_FEEDBACK_ERROR, error }),
};
