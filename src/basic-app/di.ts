/* tslint:disable:no-import-side-effect */
import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';
import { Container, injectable } from 'inversify';

const container = new Container();

const registry = {
  AppComponent: Symbol('AppComponent'),
  AdditionalInfoComponent: Symbol('AdditionalInfoComponent')
};

const {
  lazyInject,
  lazyInjectNamed,
  lazyInjectTagged,
  lazyMultiInject
} = getDecorators(container);

export {
  container,
  registry,
  lazyInject,
  lazyInjectNamed,
  lazyInjectTagged,
  lazyMultiInject,
  injectable
};
