import React, { useContext } from 'react'
import './ShopCategories.css'
import { ShopContext } from '../../Context/ShopContext'
import dropDown_icon from '../../Components/Assets/dropdown_icon.png'
import Items from '../../Components/Items/Items'
const ShopCategories = (props) => {
    const {all_product} = useContext(ShopContext)
    return (
        <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
            <p>
                <span>Showing 1-12</span> out of {all_product.length}
            </p>
            <div className="shopcategory-sort">
                sort by <img src={dropDown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
            {all_product.map((item, i) => {
                if (item.category === props.category) {
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }else {
                    return null
                }
            })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
        </div>
    )
}

export default ShopCategories