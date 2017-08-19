const ENDPOINT = 'http://localhost:3000/profiles'

export function getProfiles() {
  return fetch(ENDPOINT)
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}
