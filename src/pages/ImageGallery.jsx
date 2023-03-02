import React, {useState, useEffect} from 'react'
import ImageCard from '../components/Gallery/ImageCard'
const ImageGallery = () => {
    const [images, setImages]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('academic');
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=30797397-93c716acd0bd4064de3b0f84a&q=${term}
        &image_type=photo&pretty=true`)
          .then(res => res.json())
          .then(data => {
            setImages(data.hits);
            setIsLoading(false);
          })
          .catch(err => console.log(err));
      }, [term]);
      console.log(images)
  return (
    <>
    <div className="h-screen w-full"
    style={{
        backgroundColor:'#F4F4F4'
    }}>
      <h1 className="text-black font-bold text-3xl md:text-1xl
      text-center
      lg:text-2xl p-10 lg:mb-14 font-poppins">
        Recommended For You<span className='text-secondary'>.</span>
      </h1>

      {!images ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-5 
        md:grid-cols-2 xl:grid-cols-3 pb-20 m-5 lg:container items-center justify-center lg:ml-10">
          {images.map((image) => (
            <ImageCard key={image.id} {...image} />
          ))}
        </section>
      )}
    </div>
    </>
  )
}

export default ImageGallery
