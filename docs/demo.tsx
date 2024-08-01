/**
 * title: 基础使用
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MockAdapter from 'axios-mock-adapter';

const instance = axios.create({ timeout: 10 });

const mock = new MockAdapter(instance);

mock.onGet('/users').reply((config) => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve([200, { timeout: config.timeout }]),
      config.timeout,
    );
  });
});

const App: React.FC = () => {
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    instance.get('/users', { timeout: 20, params: { type: '1' } }).then(() => {
      setList((list) => [...list, '1']);
    });
    instance.get('/users', { timeout: 10, params: { type: '2' } }).then(() => {
      setList((list) => [...list, '2']);
    });
    instance.get('/users', { timeout: 30, params: { type: '3' } }).then(() => {
      setList((list) => [...list, '3']);
    });
  }, []);

  return <div>请求顺序应该是：{list}</div>;
};

export default App;
