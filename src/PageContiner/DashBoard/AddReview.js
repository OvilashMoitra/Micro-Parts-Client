import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <h3 className='font-bold text-2xl text-center text-black'>Add a review</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea class="textarea textarea-info" required placeholder="Write your detailed Review"
                        {...register("review-text")}
                    ></textarea>
                </div>
                <input type="range" min="1" max="5" class="range" step="1" className='w-1/3' {...register("review")} required />
                <div class="w-1/3 flex justify-between text-xs px-2 cursor-pointer">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;