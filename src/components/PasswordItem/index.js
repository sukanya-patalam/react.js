import './index.css'

const classNames = [
  'grey',
  'grey1',
  'lightPurple',
  'orange',
  'green',
  'red',
  'lightBlue',
]

const PasswordItem = props => {
  const {details, onDeletingItem, isChecked} = props
  const {id, websiteName, userName, password} = details
  const initial = websiteName[0].toUpperCase()
  const index = Math.ceil(Math.random() * classNames.length - 1)
  const name = classNames[index]
  const False = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
      alt="stars"
    />
  )
  const True = <p>{password}</p>
  const showPassword = isChecked ? True : False

  const onClickingDelete = () => {
    onDeletingItem(id)
  }

  return (
    <li className="container1">
      <div>
        <p className={`${name} initial`}>{initial}</p>
      </div>
      <div>
        <p>{websiteName}</p>
        <p>{userName}</p>
        {showPassword}
      </div>
      <div className="paras">
        <button type="button" className="button1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="icon1"
            onClick={onClickingDelete}
            testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
