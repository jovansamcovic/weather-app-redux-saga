import './index.scss';

interface LoaderProp {
  width: string,
  height: string
}

const Loader: React.FC<LoaderProp> = ({ width, height }) => {
  return (
    <div className="loader">
      <span className="loader__icon" style={{ width: `${width}`, height: `${height}` }}></span>
    </div>
  )
};

export default Loader;