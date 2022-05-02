export default [
 {
  "id":"first-name",
   "name":"firstName",
  "type":"text",
  "label" : "First Name",
  "placeholder":"first name",
  "required": "true"

 },
 {
  "id":"last-name",
   "name":"lastName",
  "type":"text",
  "label" : "Last Name",
  "placeholder":"Last Name",
  "required": "true"
  // value : props.lastName

 },
 {
  "id":"email",
   "name":"email",
  "type":"email",
  "placeholder":"example@gmail.com",
  "label" : "Email",
  "required": "true"
  // value : props.email

 },
 {
  "id":"password",
   "name":"password",
  "type":"password",
  "placeholder":"",
  "label" : "Set Password",
  "required": "true"
  // value : props.password

 },
 {
  "id":"passwordConfirm",
   "name": "password",
  "type":"password",
  "placeholder":"",
  "required": "true",
  "label" : "confirm Password"
  // value : props.password


 },
 {
  "id":"checkbox",
   "name":"checked",
  "placeholder":"",
  "type":"checkbox",
  "label" : "Subscribe to our news letter",
  // "required" : "unrequired"
  // value : props.checked
 }
]
// export default Data