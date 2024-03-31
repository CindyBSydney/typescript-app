import React from 'react';
import { User } from '../types';

const Level4Component = ({ user }: { user: User }) => (
  <div>
    <h1>User Details</h1>
    <p>ID: {user.id}</p>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
  </div>
);

export default Level4Component;
