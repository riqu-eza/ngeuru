import React from 'react';
import Box from './Box';

const Boxes = () => {
    const boxData = [
        {
            image: 'https://picsum.photos/id/1015/400/300',
            content: 'Box 1',
            to: '/box1'
        },
        {
            image: 'https://picsum.photos/id/1016/400/300',
            content: 'Box 2',
            to: '/box2'
        },
        {
            image: 'https://picsum.photos/id/1018/400/300',
            content: 'Box 3',
            to: '/box3'
        },
        {
            image: 'https://picsum.photos/id/1019/400/300',
            content: 'Box 4',
            to: '/box4'
        },
        {
            image: 'https://picsum.photos/id/1020/400/300',
            content: 'Box 5',
            to: '/box5'
        }
    ];

    return (
        <div className="boxes">
            {boxData.map((box, index) => (
                <Box
                    key={index}
                    image={box.image}
                    content={box.content}
                    to={box.to}
                />
            ))}
        </div>
    );
};

export default Boxes;