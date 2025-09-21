import os, requests

API_URL = os.getenv('API_URL', 'http://localhost:3000/api/v1/analyze')
API_KEY = os.getenv('API_KEY', 'changeme')

def call_with_url():
    r = requests.post(API_URL, json={'chartUrl': 'https://example.com/sample.png'}, headers={'x-api-key': API_KEY})
    print(r.status_code, r.json())

if __name__ == '__main__':
    call_with_url()