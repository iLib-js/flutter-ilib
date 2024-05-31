# flutter_ilib

A wrapper plugin to use iLib conveniently in Flutter apps.  
This plugin uses the [flutter_js](https://pub.dev/packages/flutter_js) to make the javascript file in the Flutter application work properly.


## TEST
### Run the Unit Test
On Linux, you need to export an environment variable called `LIBQUICKJSC_TEST_PATH` pointing to the file `libquickjs_c_bridge_plugin.so`.

```
export LIBQUICKJSC_TEST_PATH="${PWD}/test/linux/libquickjs_c_bridge_plugin.so"
flutter test test/flutter_ilib_test.dart
```
We have the script file for the above works to do everything at once.

```
./execute_unit_test.sh
```

### Excute the example
```
cd example
flutter build linux --release
flutter run -d linux --release
```

## License

Copyright (c) 2024, JEDLSoft

This plugin is license under Apache2. See the [LICENSE](./LICENSE)
file for more details.