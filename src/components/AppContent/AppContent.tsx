import GalleryContainer from '../GalleryContainer/GalleryContainer';
import PaginationContainer from '../PaginationContainer/PaginationContainer';
import style from './AppContent.module.scss';

type AppContentProps = {
  limit: number;
  page: number;
  totalPages: number;
  name?: string;
  setPage: (page: number) => void;
  authorId?: number;
  locationId?: number;
  createdFrom?: string;
  createdBefore?: string;
};

const AppContent: React.FC<AppContentProps> = ({
  limit,
  page,
  totalPages,
  name,
  setPage,
  authorId,
  locationId,
  createdFrom,
  createdBefore,
}) => {
  return (
    <>
      <div className={style.gallery}>
        <GalleryContainer
          limit={limit}
          page={page}
          name={name}
          authorId={authorId}
          locationId={locationId}
          createdFrom={createdFrom}
          createdBefore={createdBefore}
        />
      </div>

      <div className={style.pagination}>
        <PaginationContainer
          page={page}
          setPage={setPage}
          limit={limit}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default AppContent;
