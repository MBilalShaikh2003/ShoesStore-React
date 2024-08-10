import React from 'react';
import Card from './Card';

function Adult() {
    return (
        <div>
            <>
                <div className='card-container'>
                    <Card
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2py265OPdgjCZzeO7viAXYlbsdQLc5E3jLA&s"
                        shoeName="Nike"
                        price="$300"
                    />
                    <Card
                        imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/nike-motiva-lead-image-cnnu.jpg?c=16x9"
                        shoeName="Nike"
                        price="$500"
                    />
                    <Card
                        imageUrl="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19cd86fb-51c7-4daa-b9a9-69ad8b6bc9f5/alphafly-3-electric-road-racing-shoes-nXnRWH.png"
                        shoeName="Nike"
                        price="$600"
                    />
                </div>
                <div className='card-container'>
                    <Card
                        imageUrl="https://sothebys-com.brightspotcdn.com/dims4/default/07f69eb/2147483647/strip/true/crop/658x358+0+0/resize/684x372!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F00%2F76%2F0703bab14d9db8e90b9594ffa9dc%2Fsothebys-md.brightspotcdn.jpg"
                        shoeName="Nike"
                        price="$300"
                    />
                    <Card
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJQOm-zLHLvk0waqU1HSjo_bAmuR3zb9Crw&s"
                        shoeName="Nike"
                        price="$350"
                    />
                    <Card
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2py265OPdgjCZzeO7viAXYlbsdQLc5E3jLA&s"
                        shoeName="Nike"
                        price="$400"
                    />
                </div>
            </>
        </div>
    );
}

export default Adult;