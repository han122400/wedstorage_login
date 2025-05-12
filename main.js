// index.html의 JavaScript 코드

function login() {
  const id = document.getElementById('id').value
  const pw = document.getElementById('pw').value

  if (localStorage.getItem(id) === pw) {
    let username = id // 로그인 성공 시 name 변수에 사용자 ID 저장
    document.getElementById('output').innerText = '✅ 로그인 성공!'

    //쿠키로 전달
    //document.cookie = `username=${username}; path=/; max-age=3600;`;

    //URL로 전달
    location.href = `login.html?name=${encodeURIComponent(username)}`
  } else {
    document.getElementById('output').innerText = '❌ 로그인 실패!'
  }
}

// sign.html의 JavaScript 코드
function sign() {
  localStorage.setItem(
    document.getElementById('id').value,
    document.getElementById('pw').value
  )
  document.getElementById('output').innerText = '✅ 회원가입 완료!'
  location.href = 'index.html'
}

// login.html의 JavaScript 코드

//페이지간의 데이터 전달은 URL,쿠키,웹 스토리지 가있음
