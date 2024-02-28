import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import React from 'react';

function Footer() {
	return (
		<>
			<div className="flex justify-center bg-gradient-to-b from-white to-blue-500 text-white">
				<div className="container flex flex-col items-center py-0.5">
					<p className='text-xl text-gray-800 font-bold'>Farmácia</p>
					<p className='text-lg text-gray-600'>Acesse minhas redes sociais:</p>
					<div className='flex gap-2 text-gray-800'>
						<LinkedinLogo size={48} weight='bold' />
						<GithubLogo size={48} weight='bold'/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;