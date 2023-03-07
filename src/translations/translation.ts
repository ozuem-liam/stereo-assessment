import * as messages from './messages';
export default function translate(key, property) {
  let message = messages[key];
  for (const prop in property) {
    message = message.replace(`[${prop}]`, property[prop]);
  }
  return message;
}
