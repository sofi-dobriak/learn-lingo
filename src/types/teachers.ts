export interface Review {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
}

export interface Teacher {
  id: string;
  avatar_url: string;
  conditions: string[];
  experience: string;
  languages: string[];
  lesson_info: string;
  lessons_done: string;
  levels: string[];
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
  surname: string;
}

export interface FetchTeachers {
  teachers: Teacher[];
  lastKey: string;
  hasMore: boolean;
  reset: boolean;
}
