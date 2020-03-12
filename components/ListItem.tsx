import * as React from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type Props = {
  data: User
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href={'/users/[id]'} as={`/users/${data.id}`}>
    <p>
      {data.id}
      {':'}
      {data.name}
    </p>
  </Link>
);

export default ListItem;
