import '@testing-library/jest-dom';
import 'umi/test-setup';

import { theme } from 'antd';

// 禁止样式生成 hash
theme.defaultConfig.hashed = false;
