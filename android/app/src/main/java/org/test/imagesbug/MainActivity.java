package org.test.imagesbug;

import com.facebook.react.ReactActivity;
import android.content.Intent;

// import com.google.firebase.crashlytics.FirebaseCrashlytics;
import android.os.Bundle;

import com.google.firebase.FirebaseApp;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FirebaseApp.initializeApp(this);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ImagesBug";
    }
    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
    }
}
