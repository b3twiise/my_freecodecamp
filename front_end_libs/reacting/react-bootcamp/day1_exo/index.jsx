const USER_DATA = {
  name: 'Tyler McGinnis',
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  username: 'tylermcginnis'
}

function Badge () {
  return (
    <div>
      <img src={''} />
      <h1>Name: </h1>
      <h3>username: </h3>
    </div>
  ) 
}

ReactDOM.render(
  <Badge name={USER_DATA}/>,
  document.getElementById('app')
);