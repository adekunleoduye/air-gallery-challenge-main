'use client';
import Image from 'next/image';
import { ASSETS, BOARDS } from './fixture';
import { useSelectionContainer } from '@air/react-drag-to-select';

export default function Home() {
  const { DragSelection } = useSelectionContainer();

  return (
    <div className=''>
      <main className='max-w-screen-2xl mx-auto px-8'>
        <h1 className='pt-8 pb-4 font-semibold text-5xl'>Gallery View</h1>
        <section>
          <h2 className='pt-12 pb-4 uppercase text-neutral-900 font-semibold'>
            boards({BOARDS.total})
          </h2>
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
          <h2 className='pt-12 pb-4 uppercase text-neutral-900 font-semibold'>
            Assets({ASSETS.data.total})
          </h2>
          <div className='grid grid-cols-[repeat(auto-fit,275px)] gap-6'>
            {ASSETS.data.clips.map((clip) => {
              return (
                <div key={clip.id} className='relative h-280'>
                  {/* <DragSelection /> */}
                  <Image
                    className='rounded-md'
                    src={clip.assets.image}
                    alt={clip.displayName}
                    width={clip.width}
                    height={280}
                    style={{
                      objectFit: 'cover',
                      flex: 1,
                      minWidth: `200px`,
                      height: `280px`,
                    }}
                  />
                  {clip.type === 'video' && (
                    <span className='bg-stone-800 rounded-md text-white p-1 absolute right-3 bottom-3'>
                      {clip.duration}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
