//config apollo client
import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl631vah16be301ukcckg4e8u/master',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTg4OTI2OTEsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w2MzF2YWgxNmJlMzAxdWtjY2tnNGU4dS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDUyZjdhYzQtZTMxNS00ZmQ4LWFjNDMtZWYxYjdhMzZjNTkwIiwianRpIjoiY2w0b281YnlpMGhtbTAxeG4xNmJuNGlnMiJ9.A5AgYGo_SAdNfg4GtWDXHHR2tFG21R6q49zd1Z9RLsLPV1RRfLHcwKXOJyF51JyDO1gEoX-eQiQ3hPfp6hTZ1kwpuj99qOMsQQjjg2Ogg36z-DdfFJBiHECKzHCx2iEZOLPBPx9_rkG6VOUmGXobnFsuGVv_dC7oq3HFIfxSbtyAF63_SD6Lk0syexS7gP0SDNi3xDJvolmgpec6nUEWihhlYT1mqSsAZAy4k62EXjomTN9dVVIMADJXwaooUcVojtItUueiav5FAa_f7GzZVfV5b-q0N4nkP3jfd2RYCPOgj7fAHGNg3i5m26l1EaPkoSUniXRJCBeNLqiC8rGgLVQs6OfDAPjWLwPpmDw0NBaFf5qLSJ-Nui5CYfe3yFhZVqp2hUt7gz-fZWZmVy7QE9DT62s8IKJC3iZl2NWrIqGGK44RRhXlZF9oyaky7pQI_Q4rFdiEDKcjr1vfMsfHWJ0VG8UeJ7b0CUzan2qv2TUZEbYQQnaEDH0jCBdr5LjS4hIxRwsahqDtBrgoPyPR-5WaIUmqg4chIcOw63rfYB9-nq7dOfwZZ02-7FyLLcJoSh9NV0e0khw4spsb3DFdGTI6WRn1WLsi1dYWh0OgxzO3qr0R7iBW9wzgMATnfopTDcP-HzJeuo7JELj_dhQtgcg_hfkOhOerZWvIA3tAayQ'
    },
    cache: new InMemoryCache()
})