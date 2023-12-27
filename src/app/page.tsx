import Image from 'next/image';
import { ASSETS, BOARDS } from './fixture';

export default function Home() {
  return (
    <main>
      <h1>Gallery View</h1>
      <section>
        <h2>boards({BOARDS.total})</h2>
        <div className='grid grid-cols-[repeat(auto-fit,275px)] gap-8'>
          {BOARDS.data.map((board) => (
            <div
              key={board.id}
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.75)),url(${board.thumbnails[0]})`,
                backgroundSize: '100%',
              }}
              className={`bg-[center] h-[275px] bg-no-repeat rounded-md flex items-end px-4 py-8`}
            >
              <h3 className='text-2xl text-white'>{board.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Assets({ASSETS.data.total})</h2>
        <div className='gap-3'>
          {ASSETS.data.clips.map((clip) => {
            return (
              <div key={clip.id} className={`relative`}>
                <Image
                  className={`rounded-md`}
                  src={clip.assets.image}
                  alt={clip.displayName}
                  width={clip.width}
                  height={clip.height}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
