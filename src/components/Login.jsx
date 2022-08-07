import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
	<>
		<h2>ログインページ</h2>
		<div>
			新規登録は<Link to={`/register/`}>こちら</Link>
		</div>
		<div>
			<Link to={`/`}>ホームに戻る</Link>
		</div>
	</>
  )
}

export default Login