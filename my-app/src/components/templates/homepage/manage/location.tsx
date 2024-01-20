"use client"; // top to the file

import { useMemo } from 'react'
import dynamic from 'next/dynamic'

export default function Location(): JSX.Element {
	const latitude = -8.5031293; // replace with your desired latitude
	const longitude = 115.0262846; // replace with your desired longitude
	const zoom = 13;

	const MapLocation = useMemo(() => dynamic(
		() => import('@/components/templates/@common/map'),
		{
			loading: () => <p>A map is loading</p>,
			ssr: false
		}
	), [])

	return (
		<div className={'py-[5em]'}>
			<div className={'flex md:flex-row flex-col justify-center'}>
				<div className={'flex flex-col w-full'}>
					<div className={''}>
						<h5 className={'md:text-[2em] text-[1em] text-white font-[700]'}>
							Local Restaurant
						</h5>
					</div>
					<div className={'flex md:flex-row flex-col gap-[1em]'}>
						<p className={'text-[1em]'}>
							Bajera Village - Fresh Food
						</p>
						<p className={'text-[1em] text-yellow-500'}>
							08567348237
						</p>
					</div>
					<div className={'relative py-5'}>
						<MapLocation latitude={latitude} longitude={longitude} zoom={zoom}/>
					</div>
				</div>
			</div>

		</div>
	)
}
