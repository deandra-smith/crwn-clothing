import CategoryItem from '../category-item/category-item';
import './categories-directory.scss';

const CategoriesDirectory = ({categories}) => {
    return (
        <div className='categories-directory-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default CategoriesDirectory;