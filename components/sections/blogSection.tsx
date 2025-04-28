import React from 'react'
import { FaCalendarAlt, FaUserAlt, FaRegComments } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const blogPosts = [
  {
    id: 1,
    title: "How to Improve Your Digital Marketing Strategy",
    excerpt: "Discover the latest techniques to enhance your digital marketing efforts and reach more customers online.",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    comments: 8,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
},
{
    id: 2,
    title: "The Future of Artificial Intelligence in Business",
    excerpt: "Explore how AI is transforming industries and what it means for the future of your business operations.",
    date: "May 28, 2023",
    author: "Michael Chen",
    comments: 14,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Essential Financial Planning Tips for Startups",
    excerpt: "Learn the key financial strategies that every startup should implement for sustainable growth.",
    date: "April 12, 2023",
    author: "David Wilson",
    comments: 5,
    category: "Finance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
]

const BlogSection = () => {
  return (
    <div className='bg-white py-[90px] md:py-[130px] lg:py-[170px]'>
      <div className='container space-y-3'>
        <h2 className='section-title text-center'>Latest Blog Posts</h2>
        <p className='section-description max-w-xl mx-auto text-center'>
          Stay updated with our latest insights and industry trends to grow your business.
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
          {blogPosts.map((post) => (
            <div key={post.id} className='group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>
              <div className='relative overflow-hidden h-60'>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-medium'>
                  {post.category}
                </div>
              </div>

              <div className='p-6'>
                <div className='flex items-center text-sm text-gray-500 mb-4'>
                  <div className='flex items-center mr-4'>
                    <FaCalendarAlt className='mr-2' />
                    <span>{post.date}</span>
                  </div>
                  <div className='flex items-center'>
                    <FaUserAlt className='mr-2' />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className='text-xl font-bold text-gray-800 mb-3 hover:text-primary transition-colors duration-300'>
                  {post.title}
                </h3>
                <p className='text-gray-600 mb-5'>{post.excerpt}</p>

                <div className='flex justify-between items-center pt-4 border-t border-gray-100'>
                  <div className='flex items-center text-sm text-gray-500'>
                    <FaRegComments className='mr-2' />
                    <span>{post.comments} Comments</span>
                  </div>
                  <button className='flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300'>
                    Read More <FiArrowRight className='ml-2' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <button className='px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg'>
            View All Blog Posts
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogSection