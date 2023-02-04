import Image from 'next/image';
import Link from 'next/link';
import styles from './movie.module.css';

export default function Movie({ id, title, img, desc, date }) {
  return (
    <div>
      <Link href={`/movie/${id}`}>
        <Image src={img} width={300} height={450} alt={title} className={'rounded-xl'} />
      </Link>
      <h1 className="text-xl my-3 font-bold">{title}</h1>
      <div className={styles.movie_desc + ' ' + 'mb-4'}>
        <p className="font-light">{desc}</p>
      </div>

      <small className="font-bold">{date}</small>
    </div>
  );
}
