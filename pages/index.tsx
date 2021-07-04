

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

