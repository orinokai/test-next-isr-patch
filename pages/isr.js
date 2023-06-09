// an isr page

export default function ISR({time}) {
  return <h1>The page at {time}</h1>
}

export function getStaticProps() {
  return {
    props: {
      time: Date.now()
    },
    revalidate: 10
  }
}
