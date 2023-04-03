import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Icons
import { StarIcon } from '@heroicons/react/20/solid'

// Functions
import { shorten, isInCart, quantityCount } from "../helper/functions";

// Contexts
import { productsContext } from "../context/ProductContext";
import { cartContex } from "../context/CartContex";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductDetail = () => {
    const { id } = useParams();
    const products = useContext(productsContext);
    const { state, dispatch } = useContext(cartContex)
    // const data = products[id - 1];
    const data = products.info.find(item => item.id == id);
    console.log(data)


    return (
        <div className="bg-white">
            <div className="pt-6">
                {products.isLoading ? "LOADING..." :
                    <div>
                        <nav aria-label="Breadcrumb">
                            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <li>
                                    <div className="flex items-center">
                                        <a href="#" className="mr-2 text-sm font-medium text-gray-900">products</a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <a href="#" className="mr-2 text-sm font-medium text-gray-900">{data.category}</a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="text-sm">
                                    <a href={data.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                        {shorten(data.title)}
                                    </a>
                                </li>
                            </ol>
                        </nav>
                        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.title}</h1>
                            </div>
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <h2 className="sr-only">Product information</h2>
                                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={data.image} alt="product" />
                                </div>
                                <p className="text-3xl tracking-tight text-gray-900 mt-6">{data.price}</p>
                                <div className="my-6">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        data.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{data.rating.rate} out of 5 stars</p>
                                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            {data.rating.count} reviews
                                        </a>
                                    </div>
                                </div>

                                {
                                    isInCart(state, data.id) ?
                                        <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold mr-1.5 py-2 px-4 w-10 rounded" onClick={() => dispatch({ type: "INCREASE", payload: data })}>+</button> :
                                        <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}>add To cart</button>
                                }

                                {
                                    quantityCount(state, data.id) === 1 && <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: "REMOVE", payload: data })}>remove</button>
                                }
                                {
                                    quantityCount(state, data.id) > 1 && <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold py-2 px-4 w-10 rounded" onClick={() => dispatch({ type: "DECREASE", payload: data })}>-</button>
                                }
                            </div>

                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                {/* Description and details */}
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>

        </div>
    )
}

export default ProductDetail;