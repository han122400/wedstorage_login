// index.html의 JavaScript 코드

function login() {
  const id = document.getElementById('id').value
  const pw = document.getElementById('pw').value
  const hash = CryptoJS.SHA256(id + pw).toString()

  if (localStorage.getItem(id) === hash) {
    sessionStorage.setItem('login_user', id)

    let username = id // 로그인 성공 시 name 변수에 사용자 ID 저장
    document.getElementById('output').innerText = '✅ 로그인 성공!'

    //URL로 id 전달
    location.href = `login.html?name=${encodeURIComponent(username)}`
  } else {
    document.getElementById('output').innerText = '❌ 로그인 실패!'
  }
}

//해쉬 생성기
function hash() {
  const id = document.getElementById('id').value
  const pw = document.getElementById('pw').value
  // id+pw SHA-256 해시 생성
  const hash = CryptoJS.SHA256(id + pw).toString()
  document.getElementById('output').innerText = hash // 해시값 출력
}

// sign.html의 JavaScript 코드
function sign() {
  const id = document.getElementById('id').value
  const pw = document.getElementById('pw').value
  const hash = CryptoJS.SHA256(id + pw).toString()

  //이름 중복 방지
  if (localStorage.getItem(id) !== null) {
    document.getElementById('output').innerText = '이미 존재하는 아이디입니다.'
    return
  } else {
    localStorage.setItem(document.getElementById('id').value, hash)
    alert('✅ 회원가입 완료!')
    location.href = 'index.html'
  }
}

//페이지간의 데이터 전달은 URL,쿠키,웹 스토리지 가있음
