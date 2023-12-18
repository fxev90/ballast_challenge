import React, { useEffect, useState } from "react";
import { BookViewParams, useBookViews } from "..";
import { SearchBook, SearchParam } from "@/components/searchBook";
import { BookCard } from "@/components/bookcard";
import { useNavigate } from "react-router";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState<BookViewParams>({});
  const { data, refetch } = useBookViews({ params });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const handleSubmitSearch = (param: SearchParam) => {
    setParams({ [param.type]: param.term });
  };

  const redirectToBookEdit = (id: number) => navigate(`../book/edit/${id}`);

  return (
    <div className="p-4 ">
      <SearchBook submitCallback={handleSubmitSearch} />
      <div className="flex flex-wrap gap-2 m-4">
        {data?.data.map((book, index) => (
          <BookCard
            key={`display-book-${index}`}
            cb={redirectToBookEdit}
            cbText="Edit"
            bookItem={book}
          />
        ))}
      </div>
    </div>
  );
};
