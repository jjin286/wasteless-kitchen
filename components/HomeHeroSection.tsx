
export default function HeroSection({text} : {text: string}) {
    return (
      <div className='hero flex justify-center'>
        <h1>{text}</h1>
      </div>
    );
}
