import React from 'react';
import Level3 from './Level3';
import { User } from '../types';

const Level2 = ({ user }: { user: User }) => <Level3 user={user} />;

export default Level2;
