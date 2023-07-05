import { ImageCard } from '@/shared/components/tmdbimages/imageCard';
import { NavLink } from 'react-router-dom';

export const Tutorial = () => {
  return (
    <>
      <h1 className="text-2xl mb-4">You haven't collected anything!</h1>
      <p>
        Try going to the{' '}
        <NavLink to="/" className="font-extrabold text-emerald-600">
          homepage
        </NavLink>{' '}
        and finding a film you like
      </p>
      <p className="mb-2">
        Once there, click on any image you like and click the heart icon.
      </p>
      <p>Here's an example image:</p>
      <ImageCard
        type="poster"
        movie_id={772515}
        file_path="/1mZcxuL4GLUvPdEXC4iZPjG2EO3.jpg"
        aspect_ratio={0.667}
        height={3000}
        width={2000}
        inCollection={false}
      />
    </>
  );
};

export default Tutorial;
