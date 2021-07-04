
enum UserResponse {
  No = 0,
  Yes = 1,
}
function respond(msg: UserResponse) {
  if (msg === UserResponse.Yes) {
    console.log('Yes')
  }
  console.log('No')
}
respond(UserResponse.Yes);



const Home = (props: any) => {

  debugger;

  return (
    <div>
      {props.data}
    </div>
  )
}

export default Home;

export async function getStaticProps() {

  debugger;
  let msg = 'Hello';
  msg += ' Next js'

  return {
    props: {
      data: msg,
    }
  }
}

