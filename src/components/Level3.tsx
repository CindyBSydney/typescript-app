import React from 'react';
import Level4 from './Level4';
import { User } from '../types';

const Level3 = ({ user }: { user: User }) => <Level4 user={user} />;

export default Level3;
